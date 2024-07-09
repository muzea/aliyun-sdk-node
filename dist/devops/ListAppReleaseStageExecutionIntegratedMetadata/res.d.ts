export type ListAppReleaseStageExecutionIntegratedMetadataResponse = {
    /**
     * 发布分支
     * @example `release/20240625-152603220321211_release_3252057_1`
     */
    releaseBranch: string;
    /**
     * 发布分支git版本
     * @example `a66cfa8c6869b96bb7d111ba2144c9c764d556b7`
     */
    releaseRevision: string;
    /**
     * 代码仓库地址
     * @example `https://codeup.aliyun.com/60d54f3daccf2bbd6659f3ad/auto-test.git`
     */
    repoUrl: string;
    /**
     * 库类型
     * @example `CODEUP`
     */
    repoType: string;
    /**
     * 变更请求
     */
    changeRequests: {
        /**
         * 变更请求唯一标识
         * @example `fcd37726a6f84c60b7eb9c5856007c2f`
         */
        sn: string;
        /**
         * 变更请求名称
         * @example `变更名称`
         */
        name: string;
        /**
         * 变更请求分支
         * @example `feature/20240625`
         */
        branchName: string;
        /**
         * 变更请求commitId
         * @example `a66cfa8c6869b96bb7d111ba2144c9c764d556b7`
         */
        commitId: string;
        /**
         * 变更请求拥有者的阿里云pk
         * @example `262579140573491041`
         */
        ownerAccountId: string;
    }[];
}[];
