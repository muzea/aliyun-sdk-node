export interface ModifyPrefixListRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * 前缀列表ID。
     * @example `pl-x1j1k5ykzqlixdcy****`
     */
    "PrefixListId": string;
    /**
     * 前缀列表的名称。长度为2~128个字符，必须以大小写字母或中文开头，不能以`http://`、`https://`、`com.aliyun`和`com.alibabacloud`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（_）、半角句号（.）或者短划线（-）。
     * @example `PrefixListNameSample`
     */
    "PrefixListName"?: string;
    /**
     * 前缀列表的描述信息。长度为2~256个英文或中文字符，不能以`http://`和`https://`开头。
     * @example `This is description.`
     */
    "Description"?: string;
    /**
     * 添加的前缀列表信息。
     */
    "AddEntry"?: {
        /**
         * 前缀列表条目的描述信息。长度为2~32个英文或中文字符，不能以`http://`和`https://`开头。N的取值范围：0~200。
         * @example `Description Sample 01`
         */
        Description: string;
        /**
         * 添加的前缀列表条目的CIDR地址块信息。N的取值范围：0~200。
         * 添加时请您注意：
         * - 前缀列表的条目数量，不能大于前缀列表支持的最大条目容量。您可以调用[DescribePrefixListAttributes](~~205872~~)查询指定前缀列表的最大条目容量信息。
         * - 不允许设置重复的CIDR地址块信息。
         * - 不允许与`RemoveEntry.N.Cidr`参数值重复。
         * @example `192.168.2.0/24`
         */
        Cidr: string;
    }[];
    /**
     * 删除的前缀列表信息。
     */
    "RemoveEntry"?: {
        /**
         * 删除的前缀列表条目的CIDR地址块信息。N的取值范围：0~200。
         * 删除时请您注意：
         * - 不允许设置重复的CIDR地址块信息。
         * - 不允许与`AddEntry.N.Cidr`参数值重复。
         * @example `192.168.1.0/24`
         */
        Cidr: string;
    }[];
}
