export interface ListSearchCommitRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60d54f3daccf2bbd6659f3ad`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 搜索关键字
         * @example `test`
         */
        keyword: string;
        /**
         * 页码
         * 默认值为1，从第1页开始
         * @example `1`
         */
        page: number;
        /**
         * 每页大小
         * 默认值为20，取值范围【1,100】
         * @example `10`
         */
        pageSize: number;
        /**
         * 排序字段，默认为default
         * - default：默认排序，即综合排序
         * - created_at：创建时间
         * - updated_at：更新时间
         * - star：收藏数
         * - like：点赞数
         * - comment：评论数
         * - reply：回复数
         * @example `default`
         */
        order: string;
        /**
         * 排序方式，默认为desc
         * - desc：降序
         * - asc：升序
         * @example `desc`
         */
        sort: string;
        /**
         * 搜索范围，默认为all
         * - all：全局范围，公开库以及有权限的private库
         * - mine：只作为库或组成员，并且有读权限
         * @example `all`
         */
        scope: string;
        /**
         * 代码仓库查询条件
         */
        repoPath: {
            /**
             * 代码库的全路径，例如：organization/group/repo
             * > 若有多个代码库全路径，使用英文逗号","隔开
             * @example `orgId/test-group/spring-boot-demo`
             */
            value: string;
            /**
             * 查询条件类型
             * - equal：等于
             * - unequal：不等于
             * - and：与
             * - or：或
             * - not：非
             * @example `equal`
             */
            operatorType: string;
            /**
             * 查询匹配类型
             * - term：精确匹配
             * - regex：正则匹配
             * - phrase：短语匹配，默认方式
             * - wildcard：模糊匹配
             * @example `term`
             */
            matchType: string;
        };
    };
}
