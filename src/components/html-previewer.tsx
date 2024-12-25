"use client";
import React, { useState, ChangeEvent } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; 
import { predefinedHtml } from "./predefinedHtml";

export default function HTMLPreview() {
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };

  const handlePasteHtml = (): void => {
    setHtmlCode(predefinedHtml);
  };

  const handleClear = (): void => {
    setHtmlCode("");
    setPreviewHtml("");
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground px-4 sm:px-6 lg:px-8">
      {/* Card wrapping the whole layout */}
      <Card className="w-full max-w-5xl p-6 rounded-lg shadow-lg bg-card">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side: Input Section */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4 text-center">HTML Previewer</h1>
            <p className="text-muted-foreground mb-4 text-center">
              Enter your HTML code and see the preview.
            </p>
            <div className="grid gap-4">
              {/* Textarea for entering HTML code */}
              <Textarea
                value={htmlCode}
                onChange={handleChange}
                placeholder="Enter your HTML code here..."
                className="p-4 rounded-lg border border-input bg-background text-foreground"
                rows={8}
              />
              {/* Buttons to generate preview, paste predefined HTML, and clear */}
              <div className="flex justify-center lg:justify-start">
                <div className="flex gap-2">
                  <Button className="font-bold" onClick={handlePreview}>Generate Preview</Button>
                  <Button className="font-bold" onClick={handlePasteHtml}>Paste HTML</Button>
                  <Button className="font-bold" onClick={handleClear} variant="destructive">Clear</Button>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side: Preview Section */}
          <div className="flex-1 p-4 rounded-lg border border-input bg-background text-foreground">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </Card>
    </div>
  );
}
