export interface GetChainResponse {
    /**
     * 交付链描述修改时间
     * @example `1638259914000`
     */
    ModifiedTime: number;
    /**
     * 交付链作用域ID
     * @example `crr-nyrh2oko32xb****`
     */
    ScopeId: string;
    /**
     * 请求ID
     * @example `C87993B5-7D61-5CAC-8D64-1AC732DD69FF`
     */
    RequestId: string;
    /**
     * 交付链描述
     * @example `description`
     */
    Description: string;
    /**
     * 交付链创建时间
     * @example `1638255427000`
     */
    CreateTime: number;
    /**
     * 交付链作用域类型
     * @example `REPOSITORY`
     */
    ScopeType: string;
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 交付链ID
     * @example `chi-0ops0gsmw5x2****`
     */
    ChainId: string;
    /**
     * 实例ID
     * @example `cri-4cdrlqmhn4gm****`
     */
    InstanceId: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 交付链名称
     * @example `test`
     */
    Name: string;
    /**
     * 交付链配置描述
     */
    ChainConfig: {
        /**
         * 交付链配置ID
         * @example `cci-lz3ycgo69ukt****`
         */
        ChainConfigId: string;
        /**
         * 交付链配置是否有生效，取值：
         * - `true`：生效
         * - `false`：不生效
         * @example `true`
         */
        IsActive: boolean;
        /**
         * 交付链版本
         * @example `1`
         */
        Version: string;
        /**
         * 交付链节点间执行顺序关系
         */
        Routers: {
            /**
             * 源节点
             */
            From: {
                /**
                 * 源节点名称
                 * @example `DOCKER_IMAGE_BUILD`
                 */
                NodeName: string;
            };
            /**
             * 目的节点
             */
            To: {
                /**
                 * 目的节点名称
                 * @example `DOCKER_IMAGE_PUSH`
                 */
                NodeName: string;
            };
        }[];
        /**
         * 交付链中的每一个节点
         */
        Nodes: {
            /**
             * 交付链节点名称
             * @example `VULNERABILITY_SCANNING`
             */
            NodeName: string;
            /**
             * 是否启用该交付链节点，取值：
             * - `true`：启用交付链节点
             * - `false`：不启用交付链节点
             * @example `true`
             */
            Enable: boolean;
            /**
             * 交付链节点配置
             */
            NodeConfig: {
                /**
                 * 超时时间（单位秒）
                 * @example `900`
                 */
                Timeout: number;
                /**
                 * 重试次数
                 * @example `3`
                 */
                Retry: number;
                /**
                 * 交付链节点中扫描节点的阻断规则
                 */
                DenyPolicy: {
                    /**
                     * 扫描触发阻断的逻辑
                     * @example `AND`
                     */
                    Logic: string;
                    /**
                     * 扫描漏洞等级达到多少时触发阻断
                     * @example `HIGH`
                     */
                    IssueLevel: string;
                    /**
                     * 扫描漏洞数达到多少时触发阻断
                     * @example `10`
                     */
                    IssueCount: string;
                    /**
                     * 阻断动作，取值：
                     * - `BLOCK`：阻断交付链继续执行
                     * - `BLOCK_RETAG`：阻断覆盖推送镜像 tag
                     * - `BLOCK_DELETE_TAG`：阻断删除镜像 tag
                     * @example `BLOCK`
                     */
                    Action: string;
                    /**
                     * 需要阻断的CVE漏洞集合，多个CVE漏洞名用英文逗号分隔
                     * @example `CVE-2020-8286,CVE-2020-8285`
                     */
                    IssueList: string;
                    /**
                     * 需要阻断的恶意样本集合，多个恶意样本名用英文逗号分隔
                     * @example `mutate_cockhorse,abnormal_program`
                     */
                    MaliciousList: string;
                    /**
                     * 需要阻断的基线样本集合，多个基线样本名用英文逗号分隔
                     * @example `identification,hc_image_exploit`
                     */
                    BaselineList: string;
                };
                /**
                 * 交付链扫描节点引擎
                 * - `SAS_SCAN_SERVICE`, 云安全扫描引擎（需要付费开通）
                 * - `ACR_SCAN_SERVICE`, ACR扫描引擎
                 * @example `ACR_SCAN_SERVICE`
                 */
                ScanEngine: string;
            };
        }[];
    };
    /**
     * 不被交付链执行的仓库集合
     */
    ScopeExclude: string[];
}
