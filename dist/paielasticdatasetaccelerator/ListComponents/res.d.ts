export interface ListComponentsResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF1****`
     */
    RequestId: string;
    /**
     * 数据集加速槽列表。
     */
    Components: {
        /**
         * 数据集加速组件的创建者的Uid，在阿里云内为RAM用户ID （阿里云账号创建则直接为阿里云账号ID）。
         * @example `27606534679741****`
         */
        UserId: string;
        /**
         * 数据集加速组件资源拥有者的Uid，在阿里云内为阿里云账号ID 。
         * @example `155770209819****`
         */
        OwnerId: string;
        /**
         * 数据集加速组件创建的时间。格式使用ISO8601（RFC3339）。
         * @example `2014-10-02T15:01:23Z`
         */
        GmtCreateTime: string;
        /**
         * 数据集加速组件最后更新的时间。格式使用ISO8601（RFC3339）。
         * @example `2014-10-02T15:01:23Z`
         */
        GmtModifiedTime: string;
        /**
         * 数据集加速组件的唯一标识符。
         * @example `cmpt-5zk866779me51j****`
         */
        Uuid: string;
        /**
         * 数据集加速组件名称。
         * @example `dataset-accelerator`
         */
        Name: string;
        /**
         * 数据集加速组件版本。
         * @example `v1.0.0`
         */
        Version: string;
        /**
         * 数据集加速组件模板信息。
         */
        Template: {
            /**
             * 数据集加速组件模板的类型。
             * OSS：从OSS中读取模板Helm包。
             * @example `OSS`
             */
            Type: string;
            /**
             * 数据集加速组件模板的资源标识符，数据类型不同存在不同格式。
             * @example `data/VOCdevkit/VOC2007/ImageSets/Main/val.txt`
             */
            Uri: string;
        };
    }[];
    /**
     * 列表内元素数量总和。
     * @example `100`
     */
    TotalCount: number;
}
