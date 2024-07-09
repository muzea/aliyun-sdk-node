export interface OnsTopicListRequest {
    /**
     * 查询指定Topic时设置，若不输入，则查询所有Topic。
     * @example `test`
     */
    "Topic"?: string;
    /**
     * 需获取的Topic信息列表所对应的实例ID。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId"?: string;
    /**
     * Topic所绑定的标签列表。列表元素个数不得超过 20。
     */
    "Tag"?: {
        /**
         * Topic的标签键。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的Topic，若不输入表示查询所有Topic。
         * - 如果输入该值，则取值不允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `CartService`
         */
        Key: string;
        /**
         * Topic的标签值。**Key**和**Value**值必须同时输入或同时不输入。若同时输入表示根据Tag过滤符合条件的Topic，若不输入表示查询所有Topic。
         * - 如果输入该值，取值允许为空字符串。
         * - 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ServiceA`
         */
        Value: string;
    }[];
    /**
     * Topic资源创建者的用户ID，即阿里云账号的ID。
     * @example `138015630679****`
     */
    "UserId"?: string;
}
