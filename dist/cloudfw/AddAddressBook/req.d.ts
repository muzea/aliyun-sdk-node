export interface AddAddressBookRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 地址簿的地址列表，多个地址间用英文逗号分隔。
     * > 当GroupType为`ip`、`port`或`domain`时必须设置。
     * - 当GroupType为`ip`时，地址列表中填写IP地址。例如：192.0.XX.XX/32, 192.0.XX.XX/24。
     * - 当GroupType为`port`时，地址列表中填写端口或端口范围。例如：80, 100/200。
     * - 当GroupType为`domain`时，地址列表中填写域名。例如：example.com, aliyundoc.com。
     * @example `192.0.XX.XX/32, 192.0.XX.XX/24`
     */
    "AddressList"?: string;
    /**
     * 地址簿的描述信息。
     * @example `sz-001`
     */
    "Description": string;
    /**
     * 地址簿的名称。
     * @example `sz-001`
     */
    "GroupName": string;
    /**
     * 地址簿的类型，可选值包括：
     * - **ip**：IP地址簿。
     * - **domain**：域名地址簿。
     * - **port**：端口地址簿。
     * - **tag**：ECS标签地址簿。
     * @example `ip`
     */
    "GroupType": string;
    /**
     * 是否自动添加新匹配标签的ECS公网IP到地址簿。
     * - **1**：表示自动添加。
     * - **0**（默认）：表示不自动添加。
     * @example `1`
     */
    "AutoAddTagEcs"?: string;
    /**
     * 待匹配的多个ECS标签间的关系。
     * - **and**（默认）：多个标签间为“与”关系，即同时匹配多个标签的ECS公网IP才会被加入地址簿。
     * - **or**：多个标签间为“或”关系，即只要匹配一个标签的ECS公网IP就会被加入地址簿。
     * @example `and`
     */
    "TagRelation"?: string;
    /**
     * 待匹配的标签列表信息。
     */
    "TagList"?: {
        /**
         * 待匹配的ECS标签值。
         * @example `1`
         */
        TagValue: string;
        /**
         * 待匹配的ECS标签Key。
         * @example `TXY`
         */
        TagKey: string;
    }[];
}
