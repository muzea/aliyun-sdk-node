export interface OnsGroupListRequest {
    /**
     * 需获取资源列表的Group ID所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 模糊查询指定Group ID时设置，否则查询所有Group ID。
     * 如果输入GID\_ABC查询，那么会以前后缀匹配的方式进行模糊查询，返回所有包含\*GID\_ABC\*的Group ID，例如GID\_test\_GID\_ABC\_123、GID\_ABC\_356。
     * @example `GID_test_group_id`
     */
    "GroupId"?: string;
    /**
     * 查询的Group ID适用的协议。TCP协议和HTTP协议的Group ID不可以共用，需要分别创建。取值说明如下：
     * - **tcp**：默认值，表示该Group ID仅适用于TCP协议的消息收发。
     * - **http**：表示该Group ID仅适用于HTTP协议的消息收发。
     * @example `tcp`
     */
    "GroupType"?: string;
    /**
     * Group ID所绑定的标签列表。列表元素个数不得超过 20。
     */
    "Tag"?: {
        /**
         * Group ID的标签键。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的Group ID，若不输入表示查询所有Group ID。
         * - 如果输入该值，则取值不允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `CartService`
         */
        Key: string;
        /**
         * Group ID的标签值。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的Group ID，若不输入表示查询所有Group ID。
         * - 如果输入该值，取值允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ServiceA`
         */
        Value: string;
    }[];
}
