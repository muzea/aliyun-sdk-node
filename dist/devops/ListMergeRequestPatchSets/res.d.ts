export interface ListMergeRequestPatchSetsResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `SYSTEM_UNKNOWN_ERROR`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 版本号
         * @example `1`
         */
        patchSetNo: number;
        /**
         * 版本的业务ID，具有唯一性和业务实义，在涉及版本ID的传参处，均使用该ID
         * @example `513fcfd81a9142d2bb0db4f72c0aa15b`
         */
        patchSetBizId: string;
        /**
         * 版本名称
         * @example `版本1`
         */
        patchSetName: string;
        /**
         * 版本关联的提交ID
         * @example `1a072f5367c21f9de3464b8c0ee8546e47764d2d`
         */
        commitId: string;
        /**
         * 提交短ID
         * @example `1a072f53`
         */
        shortCommitId: string;
        /**
         * 关联的合并类型
         * - MERGE_SOURCE：合并源
         * - MERGE_TARGET：合并目标
         * @example `MERGE_SOURCE`
         */
        relatedMergeItemType: string;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
    }[];
}
