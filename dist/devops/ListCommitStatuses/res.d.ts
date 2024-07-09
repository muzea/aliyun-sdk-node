export interface ListCommitStatusesResponse {
    /**
     * 请求ID
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
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
     * 总记录数
     * @example `28`
     */
    total: number;
    /**
     * 返回结果列表
     */
    result: {
        /**
         * ID（无业务实际意义
         * @example `19285`
         */
        id: number;
        /**
         * 仅支持提交ID，即Commit SHA
         * @example `61cc69557962d29f737a91730b3e86f497f083a3`
         */
        sha: string;
        /**
         * 用于区分不同系统写入的字符串标识，会以标题的作用在相应的页面UI处进行展示，默认为default，长度不超过50，且英文大小写不敏感
         * @example `test-commit-status-context`
         */
        context: string;
        /**
         * 写入状态
         * - error：异常
         * - failure：失败
         * - pending：运行中
         * - success：成功
         * @example `success`
         */
        state: string;
        /**
         * 用户自行写入的跳转链接，代码平台仅提供跳转的UI，一般可设置为三方系统的链接
         * @example `xxx`
         */
        targetUrl: string;
        /**
         * 提交状态的简要描述，且不能超过3000个字符
         * @example `描述信息的具体内容
        `
         */
        description: string;
        /**
         * 提交状态的写入人简要信息
         */
        creator: {
            /**
             * 阿里云账号ID，若type=Bot时，则为空
             * @example `235671547828975455`
             */
            aliyunPk: string;
            /**
             * 若type=User，则为用户名；若type=Bot，则为应用名
             * @example `codeup`
             */
            login: string;
            /**
             * 头像地址
             * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
             */
            avatarUrl: string;
            /**
             * 写入人类型
             * - User：普通用户类型
             * - Bot：应用类型
             * @example `User`
             */
            type: string;
        };
    }[];
}
