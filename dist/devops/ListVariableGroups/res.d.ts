export interface ListVariableGroupsResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 变量组
     */
    variableGroups: {
        /**
         * 创建人阿里云账号id
         * @example `13232343434343`
         */
        creatorAccountId: string;
        /**
         * 更新时间
         * @example `1586863220000`
         */
        updateTime: number;
        /**
         * 更新人阿里云账号id
         * @example `13232343434343`
         */
        modifierAccountId: string;
        /**
         * 变量组描述
         * @example `变量组`
         */
        description: string;
        /**
         * 变量组名称
         * @example `变量组`
         */
        name: string;
        /**
         * 变量组id
         * @example `12234`
         */
        id: number;
        /**
         * 关联的流水线
         */
        relatedPipelines: {
            /**
             * 关联的流水线Id
             * @example `1234`
             */
            id: number;
            /**
             * 关联的流水线名称
             * @example `流水线`
             */
            name: string;
        }[];
        /**
         * 变量
         */
        variables: {
            /**
             * 变量值
             * @example `value1`
             */
            value: string;
            /**
             * 变量名
             * @example `name1`
             */
            name: string;
            /**
             * 是否加密
             * @example `true`
             */
            isEncrypted: boolean;
        }[];
        /**
         * 创建时间
         * @example `1586863220000`
         */
        createTime: number;
    }[];
    /**
     * 变量组总数
     * @example `30`
     */
    totalCount: number;
    /**
     * 下一次查询的token，为空表示最后一页
     * @example `assassa`
     */
    nextToken: string;
}
