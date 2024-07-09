export interface CreateDiskReplicaPairRequest {
    /**
     * 异步复制关系所属的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 源云盘（主盘）所属的可用区ID。
     * @example `cn-beijing-f`
     */
    "SourceZoneId": string;
    /**
     * 源云盘（主盘）的云盘ID。
     * @example `d-iq80sgp4d0xbk24q****`
     */
    "DiskId": string;
    /**
     * 目标云盘（从盘）所属的地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-shanghai`
     */
    "DestinationRegionId": string;
    /**
     * 目标云盘（从盘）的云盘ID。
     * @example `d-sa1f82p58p1tdw9g****`
     */
    "DestinationDiskId": string;
    /**
     * 目标云盘（从盘）所属的可用区ID。
     * @example `cn-shanghai-e`
     */
    "DestinationZoneId": string;
    /**
     * 异步复制关系的名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `TestReplicaPair`
     */
    "PairName"?: string;
    /**
     * 异步复制关系的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 异步复制关系的付费方式。取值范围：
     * - PREPAY：包年包月。
     * - POSTPAY：按量付费。
     * 默认值：POSTPAY。
     * @example `PREPAY`
     */
    "ChargeType"?: string;
    /**
     * 异步复制关系的购买时长。当`ChargeType=PREPAY`时，该参数为必选参数。时长单位由`PeriodUnit`指定，取值范围：1、2、3、6、12、24、36、60。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 异步复制关系购买时长的单位。当前仅支持Month。
     * Month：月。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-42665544****`
     */
    "ClientToken"?: string;
    /**
     * 云盘之间异步复制数据时的带宽。单位为Kbps。取值范围：
     * - 10240
     * - 20480
     * - 51200
     * - 102400
     * 默认值：10240。
     * 当ChargeType取值为POSTPAY时，不能指定本参数值，系统取值为0，表示云盘异步复制时根据数据写入变化动态分配。
     * @example `10240`
     */
    "Bandwidth"?: number;
    /**
     * 云盘异步复制关系设定的RPO值，单位：秒。当前仅支持900秒。
     * @example `900`
     */
    "RPO"?: number;
    /**
     * 异步复制对所在的企业资源组ID。
     * @example `rg-acfmvs****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 异步复制对的标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 异步复制对的标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
