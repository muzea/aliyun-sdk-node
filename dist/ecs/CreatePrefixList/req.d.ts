export interface CreatePrefixListRequest {
    /**
     * 地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * 前缀列表支持的最大条目容量。取值范围：1~200。
     * @example `10`
     */
    "MaxEntries": number;
    /**
     * 前缀列表的地址族。取值范围：
     * - IPv4。
     * - IPv6。
     * @example `IPv4`
     */
    "AddressFamily": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 前缀列表的名称。长度为2~128个字符，必须以大小字母或中文开头，不能以`http://`、`https://`、`com.aliyun`和`com.alibabacloud`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `PrefixListNameSample`
     */
    "PrefixListName": string;
    /**
     * 前缀列表的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 前缀列表条目信息。
     */
    "Entry"?: {
        /**
         * 前缀列表条目的描述信息。长度为2~32个英文或中文字符，不能以`http://`和`https://`开头。N的取值范围：0~200。
         * @example `Description Sample 01`
         */
        Description: string;
        /**
         * 前缀列表条目的CIDR地址块信息。N的取值范围：0~200。注意事项：
         * - 前缀列表的条目数量不能大于最大条目容量（`MaxEntries`）。
         * - 条目中的CIDR地址块类型根据地址族决定，一个前缀列表不能同时包含IPv4和IPv6的CIDR地址块。
         * - 多个条目中的CIDR地址块不能重复。例如，您不能设置两个192.168.1.0/24。
         * - 支持设置单IP地址，系统会自动转换为CIDR地址块。例如，您设置192.168.1.100，系统会自动转换成192.168.1.100/32。
         * - 如果使用IPv6 CIDR地址块，系统会自动转换成零压缩表示形式且字母转换为小写。例如，您设置2001:0DB8:0000:0000:0000:0000:0000:0000/32，系统会自动转换成2001:db8::/32。
         * 关于CIDR地址块的详细信息，请参见[什么是CIDR](~~40637~~#title-gu4-uzk-12r)。
         * 默认值：空。
         * @example `192.168.1.0/24`
         */
        Cidr: string;
    }[];
}
