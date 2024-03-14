// hooks/useWebSocket.ts
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export const useWebSocket = (url: string) => {
    // useState 创建了一个状态 socket 来存储 socket.io-client 的实例
    const [socket, setSocket] = useState<Socket | null>(null);
    //useEffect Hook 用于建立连接，并在组件卸载时清理资源，即关闭 WebSocket 连接。
    useEffect(() => {
        // io 函数用于初始化 socket.io-client 并连接到服务器
        const socketIo = io(url, {
            withCredentials: true, //选项用于在请求中包含凭证（如 Cookies）,
            
            transports: ['websocket'], // 选项指定客户端连接到服务器时使用的方法，这里只指定了 'websocket'，表示只使用 WebSocket 传输
        });

        setSocket(socketIo);

        return () => {
            socketIo.disconnect();
        };
    }, [url]);

    return socket;
};
