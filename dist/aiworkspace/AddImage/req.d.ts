export interface AddImageRequest {
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 镜像名称。命名规则如下：
         * - 长度为1~50个英文字符。
         * - 支持小写字母、数字和短横线（-），以字母开头。
         * - 工作空间内可重复。
         * @example `nlp-compression`
         */
        Name: string;
        /**
         * 镜像的描述信息。
         * @example `NLP模型压缩训练镜像`
         */
        Description: string;
        /**
         * 镜像地址，可以重复。关于如何查看镜像地址，详情请参见[ListImage](~~449118~~)。
         * @example `registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu`
         */
        ImageUri: string;
        /**
         * 镜像标签，是个数组，数组每一项包含key和value两个字段。
         * 官方镜像有如下标签：system.official=true
         * 目前支持添加的键如下：
         * - system.chipType
         * - system.dsw.cudaVersion
         * - system.dsw.fromImageId
         * - system.dsw.fromInstanceId
         * - system.dsw.id
         * - system.dsw.os
         * - system.dsw.osVersion
         * - system.dsw.resourceType
         * - system.dsw.rootImageId
         * - system.dsw.stage
         * - system.dsw.tag
         * - system.dsw.type
         * - system.framework
         * - system.origin
         * - system.pythonVersion
         * - system.source
         * - system.supported.dlc
         * - system.supported.dsw
         */
        Labels: {
            /**
             * 标签的键。
             * @example `system.chipType`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `GPU`
             */
            Value: string;
        }[];
        /**
         * 镜像所属的工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `15******45`
         */
        WorkspaceId: string;
        /**
         * 镜像的可见性，目前支持：
         * - PUBLIC：当前工作空间所有成员都可以操作。
         * - PRIVATE：只有创建者可以操作。
         * @example `PUBLIC`
         */
        Accessibility: string;
        /**
         * 镜像大小，单位为GB。
         * @example `2`
         */
        Size: number;
        /**
         * 镜像Id，如果不填，系统会自动生成。
         * 格式为image-18位大小写英文字母或者数字。
         * @example `image-k83*****cv`
         */
        ImageId: string;
    };
}
