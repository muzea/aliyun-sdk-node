export interface DeleteRemediationsRequest {
    /**
     * 修正设置ID。多个修正设置ID之间用半角逗号（,）分隔。
     * 关于如何获取修正设置ID，请参见[ListRemediations](~~270772~~)。
     * @example `crr-909ba2d4716700eb****`
     */
    "RemediationIds": string;
}
