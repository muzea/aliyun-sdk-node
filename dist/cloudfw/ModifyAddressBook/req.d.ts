export interface ModifyAddressBookRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 地址簿中的地址列表，多个地址间用英文逗号分隔。当GroupType为**ip**、**port**或**domain**时，您必须配置此参数。
     * - 当GroupType为**ip**时，地址列表中填写IP地址，例如：1.2.XX.XX/32，1.2.XX.XX/24。
     * - 当GroupType为**port**时，地址列表中填写端口或端口范围，例如：80/80，100/200。
     * - 当GroupType为**domain**时，地址列表中填写域名，例如：demo1.aliyun.com，demo2.aliyun.com。
     * @example `192.0.XX.XX/32，192.0.XX.XX/24`
     */
    "AddressList"?: string;
    /**
     * 地址簿的描述信息。
     * @example `bj-001`
     */
    "Description": string;
    /**
     * 地址簿的名称。
     * @example `bj-001`
     */
    "GroupName": string;
    /**
     * 地址簿的唯一标识ID。
     * >修改访问控制策略中设置的地址簿信息，需要提供该地址簿的唯一标识ID，该ID可调用[DescribeAddressBook](~~138869~~)接口查询。
     * @example `0657ab9d-fe8b-4174-b2a6-6baf358e****`
     */
    "GroupUuid": string;
    /**
     * 是否自动添加新匹配标签的ECS公网IP到地址簿。取值：
     * - **1**：表示自动添加
     * - **0**：表示不自动添加
     * @example `1`
     */
    "AutoAddTagEcs"?: string;
    /**
     * 多个ECS标签间的关系。取值：
     * - **and**：多个标签间为“与”关系，即同时匹配多个标签的ECS公网IP才会被加入地址簿。
     * - **or**：多个标签间为“或”关系，即只要匹配一个标签的ECS公网IP就会被加入地址簿。
     * @example `and`
     */
    "TagRelation"?: string;
    /**
     * 待匹配的标签列表。
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
