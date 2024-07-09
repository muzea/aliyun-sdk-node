export interface CreateFabricChannelRequest {
    /**
     * 联盟ID。
     * @example `consortium-aaaaaa-akpcsjjac2jd`
     */
    "ConsortiumId": string;
    /**
     * 通道名。最大长度50个字符，可以包含英文或数字及符号"_", "-", "."。
     * @example `channelx`
     */
    "ChannelName": string;
    /**
     * 块超时时间。
     * @example `2`
     */
    "BatchTimeout"?: number;
    /**
     * 块交易上限。
     * @example `50`
     */
    "MaxMessageCount"?: number;
    /**
     * 块大小软限制。
     * @example `12`
     */
    "PreferredMaxBytes"?: number;
    "Organization": {
        /**
         * 加入通道的组织ID号列表，输入：`Organization.1.Id=org1&Organization.2.Id=org2`。
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        Id: string;
    }[];
}
