export interface DescribeImageVulWhiteListResponse {
    /**
     * 镜像漏洞白名单列表信息。
     */
    ImageVulWhitelist: {
        /**
         * 漏洞的名称。
         * @example `scan:AVD-2022-953356`
         */
        Name: string;
        /**
         * 漏洞公告中的别名。
         * @example `CVE-2019-19906:in_sasl_add_string`
         */
        AliasName: string;
        /**
         * 操作目标。该参数为JSON格式，包含以下字段：
         * - **type**：目标类型，固定为repo
         * - **target**：目标内容，格式：命名空间/镜像仓
         * @example `{\"type\":\"repo\",\"target\":[\"sas_test/script_0209\",\"sas_test/script\"]}`
         */
        Target: string;
        /**
         * 添加白名单原因说明。
         * @example `already config in another way`
         */
        Reason: string;
        /**
         * 漏洞类型。取值包括：
         * - **cve**：系统漏洞
         * - **sca**：应用漏洞
         * @example `sca`
         */
        Type: string;
        /**
         * 漏洞主键ID。
         * @example `34032043`
         */
        Id: number;
    }[];
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 当前页显示的数据条数。
         * @example `20`
         */
        Count: number;
    };
    /**
     * 数据请求是否成功。取值：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `911025D0-3D1E-5213-A18A-37EA0C92****`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求处理的耗时，单位毫秒。
     * @example `1`
     */
    TimeCost: number;
}
