export interface PurchaseStorageCapacityUnitRequest {
    /**
     * SCU所属的地域ID。确定地域后，SCU只能抵扣该地域下云盘的按量付费账单。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SCU的名称，长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `ScuPurchaseDemo`
     */
    "Name"?: string;
    /**
     * SCU容量大小，单位为GiB。取值范围：20、40、100、200、500、1024、2048、5210、10240、20480、52100。
     * @example `20`
     */
    "Capacity": number;
    /**
     * SCU的描述信息，长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * @example `ScuPurchaseDemo`
     */
    "Description"?: string;
    /**
     * SCU的生效时间。生效时间不能超过创建时间六个月。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 默认值：无，表示从创建时间开始生效。
     * @example `2020-09-09T02:00:00Z`
     */
    "StartTime"?: string;
    /**
     * SCU的有效期时长。取值范围：
     * - 当PeriodUnit=Month时，Period参数的有效取值为1、2、3、6。
     * - 当PeriodUnit=Year时，Period参数的有效取值为1、3、5。
     * 默认值：1
     * @example `1`
     */
    "Period"?: number;
    /**
     * SCU的有效期时长单位。取值范围：
     * - Month：月
     * - Year：年
     * 默认值：Month
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 用于备注请求来源，默认值为OpenAPI，无需手动设置。
     * @example `OpenAPI`
     */
    "FromApp"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 购买的SCU的数量。取值范围：1~20
     * 默认值：1
     * @example `1`
     */
    "Amount"?: number;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * SCU的标签键。N表示可以设置的标签键数量，取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * SCU的标签值。N表示可以设置的标签值数量，且与`Tag.N.Key`的N对应。取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
