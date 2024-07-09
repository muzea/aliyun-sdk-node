export interface DetectObjectResponse {
    /**
     * 请求ID。
     * @example `6EF97B44-2763-4EAD-8737-FB9F5EE25FE2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测框数据集合。
         */
        Elements: {
            /**
             * 检测框对应的物体名称。具体类型如下所示。
             * @example `chair`
             */
            Type: string;
            Boxes: number[];
            /**
             * 检测到物体的置信度，取值范围为0~1。
             * @example `0.266`
             */
            Score: number;
        }[];
        /**
         * 图片的宽度。
         * @example `533`
         */
        Width: number;
        /**
         * 图片的高度。
         * @example `300`
         */
        Height: number;
    };
}
