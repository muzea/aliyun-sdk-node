export interface DeleteFaceUserPictureRequest {
    /**
     * 业务隔离ID，用于隔离同一个阿里云账号下不同业务应用之间的数据。请与调用[AddFaceUser](~~288338~~)接口添加用户时设置的**IsolationId**保持一致。
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 用户ID。请传入在调用[AddFaceUser](~~288338~~)接口添加用户后，获取并保存到本地的**UserId**值。
     * @example `3mtjaqebeq4d****`
     */
    "UserId": string;
    /**
     * 用户人脸图片的唯一标识符。请传入在调用[AddFaceUserPicutre](~~312040~~)接口为用户添加人脸图片后，获取并保存到本地的**Data**值。
     * @example `1bb580ef7****`
     */
    "FacePicMd5": string;
}
