export interface DescribeProjectResponse {
    /**
     * 请求id
     * @example `B897B94B-6754-5D09-AB8C-2E8186CCADC0`
     */
    requestId: string;
    /**
     * 项目ID
     * @example `p-3q9jo749ne5****`
     */
    projectId: string;
    /**
     * 项目名称
     * @example `test_project_name`
     */
    name: string;
    /**
     * 项目描述
     * @example `this is a project description`
     */
    description: string;
}
