export interface ModifyVpcPrefixListRequest {
    /**
     * 要修改的前缀列表的实例ID。
     * @example `pl-0b7hwu67****`
     */
    "PrefixListId": string;
    /**
     * 修改后的前缀列表的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `newname`
     */
    "PrefixListName"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改前缀列表的配置信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接修改前缀列表的配置信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要添加的前缀列表实例的CIDR地址块列表信息。
     */
    "AddPrefixListEntry"?: {
        /**
         * 要添加的前缀列表实例的CIDR地址块。
         * > 如果要添加的CIDR地址块已经在前缀列表中存在，则只修改**AddPrefixListEntry.N.Description**的值，即只修改该CIDR地址块的描述信息。
         * @example `172.16.0.0/12`
         */
        Cidr: string;
        /**
         * 要添加的前缀列表实例的CIDR地址块描述信息。
         * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
         * @example `newcidr`
         */
        Description: string;
    }[];
    /**
     * 要删除的前缀列表实例的CIDR地址块列表信息。
     */
    "RemovePrefixListEntry"?: {
        /**
         * 要删除的前缀列表实例的CIDR地址块。
         * @example `192.168.0.0/16`
         */
        Cidr: string;
        /**
         * 要删除的前缀列表的CIDR地址块的描述信息。
         * @example `cidr`
         */
        Description: string;
    }[];
    /**
     * 要修改配置信息的前缀列表实例所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 修改后的前缀列表实例的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `newdescription`
     */
    "PrefixListDescription"?: string;
    /**
     * 修改后的前缀列表实例的最大CIDR地址块条目数。
     * @example `20`
     */
    "MaxEntries"?: number;
}
