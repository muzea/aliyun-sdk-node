export interface GetStorageResponse {
    /**
     * 存储具体信息。
     */
    Data: {
        /**
         * 设置的存储天数，默认是180天。该值最小设置为30天，最大设置为3000天。
         * @example `180`
         */
        Ttl: number;
        /**
         * 存储地域。
         * 数据管理中心所在地为**cn-hangzhou**时，**Region**默认为上海（cn-shanghai）；数据管理中心所在地为**ap-southeast-1**时，**Region**默认为新加坡（ap-southeast-1）。
         * @example `cn-shanghai`
         */
        Region: string;
        /**
         * 是否拥有修改存储地域的权限，默认值false。取值：
         * - true：拥有修改存储地域的权限
         * - false：不拥有修改存储地域的权限
         * @example `false`
         */
        DisplayRegion: boolean;
        /**
         * 当前是否可以操作存储地域（存储地域仅能操作一次），默认值false。取值：
         * - true：可以修改存储地域
         * - false：不可以修改存储地域
         * @example `false`
         */
        CanOperate: boolean;
    };
    /**
     * 请求消息ID。
     * @example `97A31C3A-3F9F-5866-8979-5159E3DC****`
     */
    RequestId: string;
}
