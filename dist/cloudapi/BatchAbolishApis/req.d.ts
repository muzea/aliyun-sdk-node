export interface BatchAbolishApisRequest {
    /**
     * 指定要操作的api
     */
    "Api": {
        /**
         * 环境id
         * @example `979fd16250644d5b82173534f465ac77`
         */
        StageId: string;
        /**
         * API分组编号
         * @example `ced5ab777f7b440398ea70e4470124de`
         */
        GroupId: string;
        /**
         * API 唯一标识
         * @example `994f72dcdaf04af0b38022c65fdbd1ac`
         */
        ApiUid: string;
        /**
         * 环境名称
         * @example `RELEASE`
         */
        StageName: string;
    }[];
}
