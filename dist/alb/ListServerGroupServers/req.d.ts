export interface ListServerGroupServersRequest {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `FFmyTO70tTpLG6I3FmYAXG****`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。取值范围：**1**~**100**，入参为空时，默认值为**20**。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 服务器组ID。
     * @example `sgp-cb25e2i2vr******`
     */
    "ServerGroupId"?: string;
    /**
     * 服务器ID列表。
     */
    "ServerIds"?: string[];
    /**
     * 服务器组绑定的标签列表。一次请求中，绑定的标签列表中最多支持10个标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持10个标签键。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `Test`
         */
        Key: string;
        /**
         * 标签值。最多支持10个标签值。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `Test`
         */
        Value: string;
    }[];
}
