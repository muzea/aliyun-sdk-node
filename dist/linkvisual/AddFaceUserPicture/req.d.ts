export interface AddFaceUserPictureRequest {
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
     * 用户的人脸图片URL下载地址，当前仅支持JPEG和JPG格式的图片，且图片URL中不能包含中文。
     * @example `https://example.com/test.jpeg`
     */
    "FacePicUrl": string;
}
