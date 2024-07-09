export interface DetectImageTextsResponse {
    /**
     * 请求唯一ID。
     * @example `1B3D5E0A-D8B8-4DA0-8127-ED32C851****`
     */
    RequestId: string;
    /**
     * OCR文本全文，由OCRContents拼接而成。
     * @example `智能媒体管理。`
     */
    OCRTexts: string;
    /**
     * OCR文本片段列表。
     */
    OCRContents: any[];
}
