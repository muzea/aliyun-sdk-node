export interface RecognizeLatinResponse {
    /**
     * 请求唯一 ID
     * @example `43A29C77-405E-4CC0-BC55-EE694AD00655`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `{"angle":1,"content":"Đậm Phong Cách Khác Biêt  Trên tay chế tác nguyên khối dẫn đầu xu hướng với thiết kế thần máy liền mạch, độ mông ấn tượng 8.5mm cùng   kiểu dáng mặt kinh bóng mượt, sang trọng từ Galaxy M30. Vừa vặn hoền hẩo trong lông bần tay, tho thích thể hiện   phong cách thời thượng với hai phiên bản màu Đen hoặc Xanh cắ tính.  xanh Ngân Hà   Đen Ngả Khói  OC S   ","height":821,"orgHeight":803,"orgWidth":1075,"prism_version":"1.0.9","prism_wnum":9,"prism_wordsInfo":[{"angle":0,"direction":0,"height":37,"pos":[{"x":293,"y":37},{"x":776,"y":29},{"x":777,"y":66},{"x":294,"y":74}],"prob":99,"width":484,"word":"Đậm Phong Cách","x":292,"y":24}],"width":1088}`
     */
    Data: string;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 详细信息
     * @example `message`
     */
    Message: string;
}
