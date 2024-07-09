export interface OperateImageVulRequest {
    /**
     * 要处理的漏洞的信息。该参数为JSON格式，包含以下字段：
     * - namespace：镜像命名空间
     * - repoName：acr镜像仓库名
     * - regionId：地域
     * - instanceId  acr实例id
     * - repoId 仓库id
     * - tag 镜像原tag
     * - digest 镜像digest
     * - newTag 镜像修复后tag
     * - uuid 镜像uuid
     * - ids 漏洞主键id列表
     * @example `[{\"namespace\":\"cloud_oa****\",\"repoName\":\"hybirdc****\",\"regionId\":\"cn-shanghai\",\"instanceId\":\"cri-rv4nvbv8iju4****\",\"repoId\":\"crr-2q7302qrofxg****\",\"tag\":\"hybird-cloud-web_fix_167115945****\",\"digest\":\"e1a4fd25884ca2ef8840bb252c9926e4f549df9e046500dd93539b2d458c****\",\"newTag\":\"hybird-cloud-web_fix_167115996****\",\"uuid\":\"4ad91dd8c0c02de6574fa98085d0****\",\"ids\":[197540864,197540865,197540869]}]`
     */
    "Info"?: string;
    /**
     * 镜像修复固定为vul_fix。
     * @example `vul_fix`
     */
    "OperateType"?: string;
    /**
     * 漏洞类型固定为cve。
     * @example `cve`
     */
    "Type"?: string;
}
