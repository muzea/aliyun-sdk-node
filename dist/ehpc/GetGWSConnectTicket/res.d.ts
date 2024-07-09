export interface GetGWSConnectTicketResponse {
    /**
     * 用来连接可视化实例的Ticket。使用时需要先将其内容做Base64的解码，保存为.ica文件。
     * @example `W0VuY29kaG9ydFJlY29ubmVjdEVuY****`
     */
    Ticket: string;
    /**
     * 请求ID。
     * @example `5198C3E8-85F5-4280-8547-687C1710FE08`
     */
    RequestId: string;
}
