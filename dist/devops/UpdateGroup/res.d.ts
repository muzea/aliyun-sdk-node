export interface UpdateGroupResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `success`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `InvalidParam.NoPermission`
     */
    errorMessage: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 代码组主键ID
         * @example `30815`
         */
        id: number;
        /**
         * 代码组完整路径（含父路径）
         * @example `codeup-test-org/test-codeup`
         */
        pathWithNamespace: string;
        /**
         * 代码组完整名称（含父路径）
         * @example `codeup-test-org / codeup（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 代码组名称
         * @example `codeup`
         */
        name: string;
        /**
         * 代码组路径
         * @example `test-codeup`
         */
        path: string;
        /**
         * 拥有者ID
         * @example `19230`
         */
        ownerId: number;
        /**
         * 父路径ID
         * @example `26842`
         */
        parentId: number;
        /**
         * 代码组的描述信息
         * @example `描述信息的具体内容`
         */
        description: string;
        /**
         * 代码组头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c4ef67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 页面访问时的URL
         * @example `""`
         */
        webUrl: string;
        /**
         * 类型，默认为Group
         * @example `Group`
         */
        type: string;
        /**
         * 代码组的可见性
         * - 0：私有
         * - 10：企业可见
         * @example `10`
         */
        visibilityLevel: number;
    };
}
