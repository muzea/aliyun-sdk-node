export interface CompletePhysicalConnectionLOARequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-230e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
    /**
     * 物理专线所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 物理专线实例ID。
     * @example `pc-bp10tvlhnwkw****`
     */
    "InstanceId": string;
    /**
     * 运营商线路编码。
     * @example `aaa111****`
     */
    "LineCode"?: string;
    /**
     * 机房楼内线缆标签。
     * @example `bbb222****`
     */
    "LineLabel"?: string;
    /**
     * 运营商主体。取值：
     * - **中国电信**。
     * - **中国联通**。
     * - **中国移动**。
     * - **中国其他**。
     * @example `中国其他`
     */
    "LineServiceProvider"?: string;
    /**
     * 线路运维联系方式。
     * @example `1388888****`
     */
    "LineSPContactInfo"?: string;
    /**
     * 是否施工完竣。取值：
     * * **true**：完工报竣。
     * * **false**：线路运维。
     * @example `true`
     */
    "FinishWork"?: boolean;
}
