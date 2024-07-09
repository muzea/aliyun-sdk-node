export interface UploadCsrResponse {
    /**
     * CSR唯一标识。后续可通过该值直接获取CSR内容。获取CSR的接口请参见[GetCsrDetail](~~2709720~~)。
     * @example `2271`
     */
    CsrId: number;
    /**
     * 本次请求的ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
}
