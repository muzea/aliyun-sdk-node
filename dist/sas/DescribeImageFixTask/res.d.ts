export interface DescribeImageFixTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8AC52BBA-85D3-5F64-9B48-D08437CAF916`
     */
    RequestId: string;
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页中显示的修复任务的数量。默认值为**20**，表示每页显示20条修复任务。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的镜像修复任务的总数量。
         * @example `12`
         */
        TotalCount: number;
        /**
         * 当前页面显示的镜像修复任务的数量。
         * @example `12`
         */
        Count: number;
    };
    /**
     * 镜像修复任务的详细信息。
     */
    BuildTasks: {
        /**
         * 镜像修复任务的ID。
         * @example `ivf-939536b5-c3ca-427b-8183-91007756`
         */
        BuildTaskId: string;
        /**
         * 镜像修复任务的类型。此处为固定值：IMAGE_REPAIR，表示镜像修复。
         * @example `IMAGE_REPAIR`
         */
        TaskType: string;
        /**
         * 镜像的命名空间。
         * @example `name-002`
         */
        RepoNamespace: string;
        /**
         * 镜像仓库的名称。
         * @example `test-redhat`
         */
        RepoName: string;
        /**
         * 镜像的地域。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 镜像的版本。
         * @example `centos8.1-ja`
         */
        OldTag: string;
        /**
         * 镜像的UUID。
         * @example `2fa731681911ae8d1b5f11893ace****`
         */
        OldUuid: string;
        /**
         * 镜像的修复版本。
         * @example `redhat8-vault`
         */
        NewTag: string;
        /**
         * 修复后镜像UUID。
         * @example `2fa731681911ae8d1b5f11893ace****`
         */
        NewUuid: string;
        /**
         * 修复任务结束的时间戳，单位为毫秒。
         * @example `2021-10-14 20:32:05`
         */
        FixTime: string;
        /**
         * 修复任务开始的时间戳，单位为毫秒。
         * @example `2021-10-14 20:34:07`
         */
        FinishTime: string;
        /**
         * 镜像修复任务的状态。取值：
         * - **1**：修复中
         * - **2**：修复成功
         * - **3**：修复失败
         * @example `2`
         */
        Status: number;
        /**
         * 修复的漏洞名称。
         * @example `CVE-2007-5686:rpath_linux Information Disclosure`
         */
        VulAlias: string;
    }[];
}
