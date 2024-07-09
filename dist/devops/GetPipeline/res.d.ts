export interface GetPipelineResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 流水线
     */
    pipeline: {
        /**
         * 创建者阿里云账号id
         * @example `112222122`
         */
        creatorAccountId: string;
        /**
         * 环境id 0 日常环境  1预发环境 2正式环境
         * @example `0`
         */
        envId: number;
        /**
         * 环境名称
         * @example `日常环境`
         */
        envName: string;
        /**
         * 创建时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * 更新时间
         * @example `1586863220000`
         */
        updateTime: number;
        /**
         * 流水线分组id
         * @example `1111`
         */
        groupId: number;
        /**
         * 更新人阿里云账号id
         * @example `112222122`
         */
        modifierAccountId: string;
        /**
         * 流水线名称
         * @example `流水线`
         */
        name: string;
        /**
         * 标签
         */
        tagList: {
            /**
             * 标签id
             * @example `22`
             */
            id: number;
            /**
             * 标签名称
             * @example `标签1`
             */
            name: string;
        }[];
        /**
         * 流水线配置
         */
        pipelineConfig: {
            /**
             * 流水线配置信息
             * @example `schema: tb pipeline:   - name: 执行命令     stages:       - driven: AUTO         jobs:           - displayName: 执行命令             task: execution-component-production@10             identifier: '10_1626147407245'             templateType: task             templateSign: ''             templateBatchUpdate: 'N'             extraInfo: ''             params:               version1: pre-jdk1.62               steps:                 - name: 执行命令                   stepType: exec-shell                   stepIdentifier: '10_1626147407245__11_1626147407249'                   command: |                     # input your command here                     echo hello,world!                   ARTIFACTS: ''                   JSONEncoding: true                   freeInTaskGroupModeFields:                     - ARTIFACTS                   source: 132504-sss_ddd_3mvJ               ENGINE_PIPELINE_NAME: '${INPUTS.ENGINE_PIPELINE_NAME}'               ENGINE_PIPELINE_ID: '${INPUTS.ENGINE_PIPELINE_ID}'               ENGINE_PIPELINE_INST_ID: '${INPUTS.ENGINE_PIPELINE_INST_ID}'               ENGINE_PIPELINE_INST_NUMBER: '${INPUTS.ENGINE_PIPELINE_INST_NUMBER}'               buildNodeGroup: K8S-4             plugins: []             output: []             freeInTaskGroupModeFields: []`
             */
            flow: string;
            /**
             * 流水线环境变量等
             * @example `{}`
             */
            settings: string;
            /**
             * 代码源
             */
            sources: {
                /**
                 * 代码源唯一标识
                 * @example `xxsxsxs`
                 */
                sign: string;
                /**
                 * 代码源类型aliyunGit 阿里云代码库 customGitlab  自建git giteeGit 码云 codeup Codeup git 通用git gitlab gitlab bitbucket bitbucket githubOAuth github
                 * @example `Codeup`
                 */
                type: string;
                /**
                 * 代码数据
                 */
                data: {
                    /**
                     * 分支
                     * @example `master`
                     */
                    branch: string;
                    /**
                     * 服务连接Id
                     * @example `12`
                     */
                    serviceConnectionId: number;
                    /**
                     * 代码源显示标签
                     * @example `cdup/ss`
                     */
                    label: string;
                    /**
                     * 是否提交触发
                     * @example `true`
                     */
                    isTrigger: boolean;
                    /**
                     * 代码库地址
                     * @example `https://codeup.aliyun.com/test.git`
                     */
                    repo: string;
                    /**
                     * 触发过滤条件
                     * @example `.*`
                     */
                    triggerFilter: string;
                    /**
                     * webhhook地址
                     * @example `https://flow.aliyun/webhook/asassasa`
                     */
                    webhook: string;
                    /**
                     * 触发事件
                     */
                    events: string[];
                    /**
                     * 是否分支模式
                     * @example `false`
                     */
                    isBranchMode: boolean;
                    /**
                     * 是否子模块
                     * @example `false`
                     */
                    isSubmodule: boolean;
                    /**
                     * 是否设置clone深度
                     * @example `true`
                     */
                    isCloneDepth: boolean;
                    /**
                     * 克隆深度
                     * @example `1`
                     */
                    cloneDepth: number;
                    /**
                     * 证书Id
                     * @example `222`
                     */
                    credentialId: number;
                    /**
                     * 证书类型
                     * @example `region-ssh`
                     */
                    credentialType: string;
                    /**
                     * 证书显示名称
                     * @example `企业公钥`
                     */
                    credentialLabel: string;
                    /**
                     * github命名空间
                     * @example `asasasas`
                     */
                    namespace: string;
                };
            }[];
        };
    };
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
}
