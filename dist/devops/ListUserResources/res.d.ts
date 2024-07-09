export interface ListUserResourcesResponse {
    /**
     * 请求ID
     * @example `A35869D5-BB29-5F84-A4DD-B09985EA2AFA`
     */
    requestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误信息
     * @example `”“`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `success`
     */
    errorCode: string;
    /**
     * 总记录数
     * @example `2`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * 用户信息
         */
        userInfo: {
            /**
             * 用户ID
             * @example `19230`
             */
            id: number;
            /**
             * 用户名称
             * @example `test-codeup`
             */
            name: string;
            /**
             * 用户登录名
             * @example `test-codeup`
             */
            username: string;
            /**
             * 用户状态，可选值：
             * - active
             * - blocked
             * @example `active`
             */
            state: string;
            /**
             * 头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 用户邮箱
             * @example `username@example.com`
             */
            email: string;
        };
        /**
         * 用户有权限的代码组列表
         */
        groupInfos: {
            /**
             * 代码组信息
             */
            groupInfo: {
                /**
                 * 代码组ID
                 * @example `35268`
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
                 * 代码组完整名称（含完整组名称）
                 * @example `test-org / test-group（斜杠两侧有空格）`
                 */
                nameWithNamespace: string;
                /**
                 * 代码组完整路径（含父路径）
                 * @example `test-org/test-group`
                 */
                pathWithNamespace: string;
                /**
                 * 父路径ID
                 * @example `1183319`
                 */
                parentId: number;
                /**
                 * 代码组拥有者ID
                 * @example `1234`
                 */
                ownerId: number;
                /**
                 * 创建时间
                 * @example `2022-01-14T21:08:26+08:00
                `
                 */
                createdAt: string;
                /**
                 * 更新时间
                 * @example `2022-01-14T21:08:26+08:00
                `
                 */
                updatedAt: string;
                /**
                 * 代码组的可见性
                 * - 0：私有
                 * - 10：企业可见
                 * @example `0`
                 */
                visibilityLevel: number;
                /**
                 * 代码组的描述信息
                 * @example `test-group`
                 */
                description: string;
            };
            /**
             * 用户在代码组的角色信息
             */
            groupRole: {
                /**
                 * 关联的ID，指代码库或代码组ID
                 * @example `35268`
                 */
                sourceId: number;
                /**
                 * 关联的类型，可选值：
                 * - Project：指代码库
                 * - Namespace：指代码组
                 * @example `Namespace`
                 */
                sourceType: string;
                /**
                 * 权限类型
                 * - 20：浏览者
                 * - 30：开发者
                 * - 40：管理员
                 * @example `40`
                 */
                accessLevel: number;
                /**
                 * 角色中文名
                 * - 浏览者
                 * - 开发者
                 * - 管理员
                 * @example `管理员`
                 */
                cnRoleName: string;
                /**
                 * 角色英文名
                 * - Viewer - 浏览者
                 * - Developer - 开发者
                 * - Admin - 管理员
                 * @example `Admin`
                 */
                enRoleName: string;
            };
        }[];
        /**
         * 用户有权限的代码库列表
         */
        repositoryInfos: {
            /**
             * 代码库信息
             */
            repositoryInfo: {
                /**
                 * 代码库ID
                 * @example `37229`
                 */
                id: number;
                /**
                 * 代码库名称
                 * @example `test-repo`
                 */
                name: string;
                /**
                 * 代码库路径
                 * @example `test-repo`
                 */
                path: string;
                /**
                 * 代码库描述
                 * @example `具体的描述内容`
                 */
                description: string;
                /**
                 * 代码库完整名称（含完整组名称）
                 * @example `test-org / test-group / test-repo（斜杠两侧有空格）`
                 */
                nameWithNamespace: string;
                /**
                 * 代码库完整路径（含完整组路径）
                 * @example `test-org/test-group/test-repo`
                 */
                pathWithNamespace: string;
                /**
                 * 可见性
                 * - 0：私有，仅代码库成员可见
                 * - 10：企业内公开，企业成员可见
                 * @example `0`
                 */
                visibilityLevel: number;
                /**
                 * 最后活跃时间
                 * @example `2022-01-14T21:08:26+08:00
                `
                 */
                lastActivityAt: string;
                /**
                 * 上级路径的ID
                 * @example `600002`
                 */
                namespaceId: number;
                /**
                 * 成员权限
                 * - 20：浏览者
                 * - 30：开发者
                 * - 40：管理员
                 * @example `40`
                 */
                accessLevel: number;
                /**
                 * 创建时间
                 * @example `2022-01-14T21:08:26+08:00`
                 */
                createdAt: string;
                /**
                 * 更新时间
                 * @example `2022-01-14T21:08:26+08:00`
                 */
                updatedAt: string;
                /**
                 * 归档标识
                 * @example `false`
                 */
                archived: boolean;
                /**
                 * 创建者ID
                 * @example `12679`
                 */
                creatorId: number;
                /**
                 * 加密标识
                 * @example `false`
                 */
                encrypted: boolean;
            };
            /**
             * 用户在代码库的角色信息
             */
            repositoryRole: {
                /**
                 * 来源ID，指代码库或代码组ID
                 * @example `37229`
                 */
                sourceId: number;
                /**
                 * 关联的类型，可选值：
                 * - Project：指代码库
                 * - Namespace：指代码组
                 * @example `Project`
                 */
                sourceType: string;
                /**
                 * 权限类型
                 * - 20：浏览者
                 * - 30：开发者
                 * - 40：管理员
                 * @example `40`
                 */
                accessLevel: number;
                /**
                 * 角色中文名
                 * - 浏览者
                 * - 开发者
                 * - 管理员
                 * @example `管理员`
                 */
                cnRoleName: string;
                /**
                 * 角色英文名
                 * - Viewer - 浏览者
                 * - Developer - 开发者
                 * - Admin - 管理员
                 * @example `Admin`
                 */
                enRoleName: string;
            };
        }[];
    }[];
}
