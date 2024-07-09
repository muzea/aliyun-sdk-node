export interface GetRemediationTemplateRequest {
    /**
     * 自动修正模板标识。
     * 关于如何获取修正模板标识，请参见[合规库](~~2337741~~)。
     * @example `ACS-ALB-BulkyEnableDeletionProtection`
     */
    "TemplateIdentifier"?: string;
}
