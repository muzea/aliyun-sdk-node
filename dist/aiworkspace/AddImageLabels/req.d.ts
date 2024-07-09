export interface AddImageLabelsRequest {
    /**
     * 镜像ID。如何获取镜像ID，请参见[ListImages](~~449118~~)  。
     * @example `image-4c62******53uor
    `
     */
    "ImageId": string;
    /**
     * 镜像标签。
     */
    "body"?: {
        /**
         * 镜像标签列表。
         */
        Labels: {
            /**
             * 标签的键，目前允许添加的键如下
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
             * @example `system.chipType`
             */
            Key: string;
            /**
             * 标签的值。
             * @example `GPU`
             */
            Value: string;
        }[];
    };
}
