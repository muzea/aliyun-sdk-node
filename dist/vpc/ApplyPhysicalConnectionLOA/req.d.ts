export interface ApplyPhysicalConnectionLOARequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 物理专线所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 物理专线带宽值。单位：Mbps。
     * 取值范围：**2**~**10240**。
     * @example `3`
     */
    "Bandwidth"?: number;
    /**
     * 部署物理专线的地理位置。
     * @example `杭州`
     */
    "PeerLocation"?: string;
    /**
     * 物理专线实例ID。
     * @example `pc-bp1qrb3044eqi****`
     */
    "InstanceId": string;
    /**
     * 物理专线接入的客户公司名称。
     * @example `company`
     */
    "CompanyName": string;
    /**
     * 物理专线类型。取值：
     * - **MSTP**：MSTP专线。
     * - **MPLSVPN**：MPLSVPN专线。
     * - **FIBRE**：光纤直连。
     * - **Other**：其它类型专线。
     * @example `FIBRE`
     */
    "LineType": string;
    /**
     * 物理专线施工单位。
     * @example `阿里`
     */
    "Si": string;
    /**
     * 施工单位入场时间。按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-02-28T16:00:00Z`
     */
    "ConstructionTime": string;
    /**
     * 施工工程师信息。
     */
    "PMInfo"?: {
        /**
         * 施工工程师证件号码，可以填身份证号码或者国际护照号码。
         * 最多可配置16个施工工程师的信息。
         * @example `5****************9`
         */
        PMCertificateNo: string;
        /**
         * 施工工程师姓名。
         * @example `张三`
         */
        PMName: string;
        /**
         * 施工工程师证件类型。取值：
         * - **IDCard**：身份证。
         * - **Passport**：国际护照。
         * @example `IDCard`
         */
        PMCertificateType: string;
        /**
         * 施工工程师性别。
         * @example `Male`
         */
        PMGender: string;
        /**
         * 施工工程师联系方式。
         * @example `1390000****`
         */
        PMContactInfo: string;
    }[];
}
