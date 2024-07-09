export interface QueryBarrelImageListResponse {
    /**
     * 请求id
     * @example `0FDB7AA6-CEA2-5948-B930-A01F5266D90E`
     */
    RequestId: string;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 图片
     */
    Images: {
        /**
         * 是否在阿里云购买了商品券。
         * @example `购买`
         */
        Buy: boolean;
        /**
         * 镜像地址
         * @example `中图`
         */
        MidImage: string;
        /**
         * 原图大小
         * @example `大图`
         */
        BigImage: string;
        /**
         * 原图url
         * @example `小图`
         */
        SmallImage: string;
        /**
         * 规格名称。
         */
        Specifications: {
            /**
             * 原价。
             * @example `300`
             */
            Price: string;
            /**
             * 图片宽度。
             * @example `1`
             */
            Width: number;
            /**
             * 图片高度
             * @example `100`
             */
            Height: number;
            /**
             * 名称
             * @example `authId`
             */
            Name: string;
            /**
             * ID
             * @example `h4604360275725312`
             */
            ImageId: string;
            /**
             * 任务ID。
             * @example `55222`
             */
            Id: number;
            /**
             * 前缀列表的主键id。
             * @example `jpg`
             */
            Suffix: string;
        }[];
        /**
         * 线下网关镜像名字的i18n key。可能值：
         * - sgw.file.ova.title：云存储性能型文件网关 vSphere（v6.0及以上）镜像。
         * - sgw.file.vhd.title：云存储性能型文件网关HyperV镜像。
         * - sgw.file.kvm.title：云存储性能型文件网关KVM镜像。
         * @example `背部按摩10`
         */
        Title: string;
        /**
         * 镜像tag
         * @example `v1`
         */
        Tag: string;
        /**
         * 镜像id
         * @example `h4548620964041728`
         */
        ImageId: string;
    }[];
    /**
     * 错误信息
     * @example `Success. Request Success.`
     */
    ErrorMsg: string;
    /**
     * 错误码
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 是否有下一页
     * @example `False`
     */
    HasNext: boolean;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 下一页标识
     * @example `51003`
     */
    NextId: number;
}
