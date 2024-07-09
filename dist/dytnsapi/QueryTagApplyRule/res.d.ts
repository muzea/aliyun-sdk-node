export interface QueryTagApplyRuleResponse {
    /**
     * 请求ID。
     * @example `CC3BB6D2-****-****-9DCE-B38165CE4C47`
     */
    RequestId: string;
    /**
     * 返回状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 是否需要提供申请材料，取值：
         * - 0：不需要。
         * - 1：需要。
         * @example `1`
         */
        NeedApplyMaterial: number;
        /**
         * 是否支持加密查询，取值：
         * - 0：不支持。
         * - 1：支持。
         * @example `0`
         */
        EncryptedQuery: number;
        /**
         * 服务协议链接。
         * @example `example.aliyundoc.com`
         */
        SlaLink: string;
        /**
         * 申请材料要求。NeedApplyMaterial=1时，返回该参数。
         * @example `申请材料的要求是XXX`
         */
        ApplyMaterialDesc: string;
        /**
         * 是否自动审批，取值：
         * - 0：不自动审批。
         * - 1：自动审批。
         * @example `1`
         */
        AutoAudit: number;
        /**
         * 计费标准说明链接。
         * @example `aliyundoc.com`
         */
        ChargingStandardLink: string;
    };
    /**
     * 请求状态码。 **OK**表示成功。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
