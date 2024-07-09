export interface GetScenePreviewDataResponse {
    /**
     * Id of the request
     * @example `A8CD0AD9-8A92-455A-A984-A7E4B76FF387`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `0：成功，其他：失败`
     */
    Code: number;
    /**
     * 是否请求成功
     * @example `true/false`
     */
    Success: boolean;
    /**
     * 错误消息
     * @example `xxxxx`
     */
    Message: string;
    /**
     * 响应数据
     */
    Data: {
        /**
         * 模型数据
         */
        Model: {
            /**
             * 点位数据
             */
            PanoList: {
                /**
                 * 点位ID
                 * @example `1****`
                 */
                Id: string;
                /**
                 * 一个名称，无实际意义
                 * @example `location_93132801658010****`
                 */
                RawName: string;
                /**
                 * 楼层号
                 * @example `1****`
                 */
                FloorIdx: string;
                /**
                 * 房间号
                 * @example `1****`
                 */
                RoomIdx: string;
                /**
                 * 当前点位是否渲染，false不渲染，场景无法跳转
                 * @example `true/false`
                 */
                Enabled: boolean;
                /**
                 * token
                 * @example `sIPGWRGLJHEIQE****`
                 */
                Token: string;
                /**
                 * 全景贴图路径
                 * @example `sgm/A.e.EOGTOEGYOOI****​/pano_texture/multi/0/%s.jpg`
                 */
                Resource: string;
                /**
                 * 图片虚拟ID
                 * @example `93132801658010****`
                 */
                VirtualId: string;
                /**
                 * 图片名称
                 * @example `卧室`
                 */
                VirtualName: string;
                /**
                 * 单房间多图情况下，是否为主图，默认true
                 * @example `true/false`
                 */
                MainImage: boolean;
                /**
                 * 子场景ID
                 * @example `a7RqCd3kLMgglmn****`
                 */
                SubSceneId: string;
                /**
                 * 当前房间的所有点位
                 */
                CurRoomPicList: string[];
                /**
                 * 当前房间邻近可视的点位id
                 */
                Neighbours: string[];
                /**
                 * 位置数据
                 */
                Position: {
                    /**
                     * 当前子场景名标签在场景中的坐标
                     */
                    Viewpoint: number[];
                    /**
                     * 当前点位在场景中的坐标
                     */
                    Spot: number[];
                    /**
                     * 当前点位在场景中的旋转四元素
                     */
                    Rotation: number[];
                };
            }[];
            /**
             * 模型地址
             * @example `https://www.example.com/sgm/A.e.EOGTOE****​/A.e.EOGTOE****.sgm`
             */
            ModelPath: string;
            /**
             * 模型的贴图路径
             * @example `https://www.example.com/sgm/A.e.EOGTOE****​/model_texture/`
             */
            TextureModelPath: string;
            /**
             * 漫游后预览图片路径
             * @example `https://www.example.com/sgm/A.e.EOGTOE****​/pano_texture/`
             */
            TexturePanoPath: string;
        };
        /**
         * 热点数据
         */
        Tags: {
            /**
             * 标签ID
             * @example `1****`
             */
            Id: string;
            /**
             * 热点类型（TEXT | IMAGE | VIDEO | LINK | SCENESLINK）
             * @example `IMAGE`
             */
            Type: string;
            /**
             * 坐标
             */
            Position: number[];
            /**
             * 坐标
             */
            PositionPanoCube: number[];
            /**
             * 配置
             */
            Config: {
                /**
                 * 标题
                 * @example `标题`
                 */
                Title: string;
                /**
                 * 内容
                 * @example `内容`
                 */
                Content: string;
                /**
                 * 背景色
                 * @example `#00000`
                 */
                BackgroundColor: string;
                /**
                 * 点位ID
                 * @example `1****`
                 */
                PanoId: string;
                /**
                 * 视频链接
                 * @example `http://www.example.com/****.mp4`
                 */
                Video: string;
                /**
                 * 超链接
                 * @example `http://www.example.com/***`
                 */
                Link: string;
                /**
                 * 场景ID
                 * @example `323****`
                 */
                SceneId: number;
                /**
                 * 坐标
                 */
                Position: number[];
                /**
                 * 坐标
                 */
                PositionPanoCube: number[];
                /**
                 * 图片链接
                 */
                Images: string[];
                /**
                 * 按钮配置
                 */
                ButtonConfig: {
                    /**
                     * 按钮类型
                     * @example `CLICK_CHECK`
                     */
                    Type: string;
                    /**
                     * 按钮内容
                     * @example `点击查看`
                     */
                    CustomText: string;
                };
                /**
                 * 内容类型，支持默认(default)，小标(point)，壁纸(mural)
                 * @example `default`
                 */
                FormSelectImgType: string;
                /**
                 * 是否在鸟瞰模式下显示
                 * @example `true/false`
                 */
                IsTagVisibleBy3d: boolean;
                /**
                 * type为SCENESLINK时生效，背景图的大小
                 * @example `true/false`
                 */
                FormJumpType: boolean;
                /**
                 * type为SCENESLINK时生效，背景图的大小
                 */
                FormImgSize: number[];
                /**
                 * 当前热点所在房间的所有点位id
                 */
                RelatedPanoIds: string[];
            };
        }[];
    };
}
