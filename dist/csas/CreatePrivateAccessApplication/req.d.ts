export interface CreatePrivateAccessApplicationRequest {
    /**
     * 内网访问应用名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `private_access_application_name`
     */
    "Name": string;
    /**
     * 内网访问应用描述。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）、短划线（-）和空格。
     * @example `这是一条内网访问应用`
     */
    "Description"?: string;
    /**
     * 内网访问应用地址集合。最多可输入1000个内网访问应用地址。
     */
    "Addresses": string[];
    /**
     * 内网访问应用端口范围集合。最多可输入65535个端口范围。多个端口范围不可重复或重叠。
     */
    "PortRanges": {
        /**
         * 起始端口。小于等于结束端口。
         * @example `80`
         */
        Begin: number;
        /**
         * 结束端口。大于等于起始端口。
         * @example `81`
         */
        End: number;
    }[];
    /**
     * 内网访问应用协议。取值：
     * - **All**：全部。
     * - **TCP**
     * - **UDP**
     * @example `All`
     */
    "Protocol": string;
    /**
     * 内网访问应用状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status": string;
    /**
     * 内网访问标签ID集合。1个内网访问应用最多可关联6个自定义类型的内网访问标签。
     */
    "TagIds"?: string[];
}
