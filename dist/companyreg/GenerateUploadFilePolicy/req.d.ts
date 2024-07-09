export interface GenerateUploadFilePolicyRequest {
    /**
     * 文件类型
     * @example `company_apply_business_license`
     */
    "FileType"?: string;
    /**
     * 业务类型
     * @example `esp.isp`
     */
    "BizType"?: string;
    /**
     * 文件名称
     * @example `营业执照.jpg`
     */
    "FileName"?: string;
}
