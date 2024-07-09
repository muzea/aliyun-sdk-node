export interface SearchAddressGroupsRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 矩形的左顶点位置（维度，经度）
         * @example `39.121,101.2121`
         */
        tl_geo_point: string;
        /**
         * 矩形的右底点位置（维度，经度）
         * @example `40.121,105.2121`
         */
        br_geo_point: string;
        /**
         * 查询的地点级别
         * @example `city
        一共有5个值可选：如下所示
        - country
        - province
        - city
        - district
        - township`
         */
        address_level: string;
        /**
         * 地点列表
         */
        address_names: string[];
        /**
         * 图片缩略图处理样式
         * @example `image/resize,w_200`
         */
        image_thumbnail_process: string;
        /**
         * 视频缩略图处理样式
         * @example `video/snapshot,t_7000,f_jpg,w_800,h_600,m_fast`
         */
        video_thumbnail_process: string;
    };
}
