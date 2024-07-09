export interface ListRepositoryGroupsResponse {
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 总记录数
     * @example `100`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 代码组ID（组空间的namespaceId）
         * @example `19285`
         */
        id: number;
        /**
         * 组路径
         * @example `test-codeup`
         */
        path: string;
        /**
         * 组名称
         * @example `test-codeup`
         */
        name: string;
        /**
         * 组名称（含父路径）
         * @example `60de7a6852743a5162b5f957 / test-codeup（斜杠两侧有空格）`
         */
        nameWithNamespace: string;
        /**
         * 组路径（含父路径）
         * @example `60de7a6852743a5162b5f957/test-codeup`
         */
        pathWithNamespace: string;
        /**
         * 代码组的可见性
         * - 0：私有
         * - 10：企业可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 页面访问时的URL
         * @example `""`
         */
        webUrl: string;
        /**
         * 组的类型为：Group
         * @example `Group`
         */
        type: string;
        /**
         * 代码组的描述信息
         * @example `描述信息的具体内容`
         */
        description: string;
        /**
         * 父路径ID
         * @example `26842`
         */
        parentId: number;
        /**
         * 拥有者ID
         * @example `19230`
         */
        ownerId: number;
        /**
         * 权限类型
         * 20：浏览者
         * 30：开发者
         * 40：管理员
         * @example `40`
         */
        accessLevel: number;
        /**
         * 组包含的代码库数量
         * @example `10`
         */
        projectCount: number;
        /**
         * 子组的数量（非递归统计）
         * @example `10`
         */
        groupCount: number;
        /**
         * 创建时间
         * @example `2022-03-18 14:24:54`
         */
        createdAt: string;
        /**
         * 更新时间
         * @example `2022-03-18 14:24:54`
         */
        updatedAt: string;
    }[];
}
