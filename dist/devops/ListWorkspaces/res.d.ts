export interface ListWorkspacesResponse {
    /**
     * TotalCount本次请求条件下的数据总量，此参数为可选参数，默认可不返回
     * @example `100`
     */
    totalCount: number;
    /**
     * 表示当前调用返回读取到的位置，空代表数据已经读取完毕
     * @example `beb1eff55bf03a13cf321a395dxxxxxx`
     */
    nextToken: string;
    /**
     * MaxResults本次请求所返回的最大记录条数
     * @example `10`
     */
    maxResults: number;
    /**
     * 工作空间列表
     */
    workspaces: {
        /**
         * 代码版本，支持 commitSHA、分支、标签
         * @example `master`
         */
        codeVersion: string;
        /**
         * 代码来源URL
         * @example `https://codeup.aliyun.com/demo/group/Codeup-Demo.git`
         */
        codeUrl: string;
        /**
         * 工作空间名称
         * @example `Demo`
         */
        name: string;
        /**
         * 机器规格
         * @example `2::4::60`
         */
        spec: string;
        /**
         * 空间状态，枚举：CREATING-创建中, SUCCESS-运行中, FROZEN-冻结中, RECOVERING-恢复中
         * @example `SUCCESS`
         */
        status: string;
        /**
         * 工作空间模板
         * @example `all-in-one`
         */
        template: string;
        /**
         * 工作空间唯一标识，字符串形式，可在云效DevStudio访问空间链接中获取
         * @example `6ed82817-ab75-4563-865d-81e60dxxxxxx`
         */
        id: string;
        /**
         * 用户阿里云PK
         * @example `1470227819xxxxxx`
         */
        userId: string;
        /**
         * 创建时间戳
         * @example `1628564442000`
         */
        createTime: string;
    }[];
    /**
     * 请求ID
     * @example `F7B85D1B-D1C2-140F-A039-341859F130B9`
     */
    requestId: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
}
