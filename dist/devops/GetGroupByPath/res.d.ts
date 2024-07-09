export interface GetGroupByPathResponse {
    /**
     * 请求ID
     * @example `6177543A-8D54-5736-A93B-E0195A1512CB`
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
     * 返回代码组信息
     */
    result: {
        /**
         * 代码组ID，也是代码组的空间ID
         * @example `30815`
         */
        id: number;
        /**
         * 代码组名称
         * @example `test-group`
         */
        name: string;
        /**
         * 代码组路径
         * @example `test-group`
         */
        path: string;
        /**
         * 代码组路径（含完整父路径）
         * @example `codeup-test-org/test-group`
         */
        pathWithNamespace: string;
        /**
         * 代码组名称（含完整父路径）
         * @example `codeup-test-org / test-group（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 代码组的可见性
         * - 0：私有
         * - 10：企业可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 代码组的描述信息
         * @example `描述内容`
         */
        description: string;
        /**
         * 代码组头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 页面访问时的URL
         * @example `xxx`
         */
        webUrl: string;
        /**
         * 父路径ID
         * @example `26842`
         */
        parentId: string;
        /**
         * 拥有者ID
         * @example `19230`
         */
        ownerId: string;
    };
}
