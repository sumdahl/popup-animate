// // import React from "react";
// // import { motion } from "framer-motion";

// // interface Message {
// //   name: string;
// //   message: string;
// //   updatedAt: string;
// //   isNew?: boolean; // Optional prop for new message styling
// // }

// // const MessageCard: React.FC<Message> = ({
// //   name,
// //   message,
// //   updatedAt,
// //   isNew,
// // }) => {
// //   return (
// //     <motion.div
// //       layout
// //       initial={{ opacity: 0, y: 30, scale: 0.9 }} // Starts lower with slight shrink
// //       animate={{
// //         opacity: 1,
// //         y: 0,
// //         scale: isNew ? 1.05 : 1, // Slightly pop the new message
// //       }}
// //       exit={{ opacity: 0, y: -20, scale: 0.95 }} // Smooth exit
// //       transition={{
// //         type: "spring",
// //         stiffness: 180, // Softer, more natural motion
// //         damping: 20, // Reduces excessive bouncing
// //         mass: 0.7, // Mimics real-world weight
// //       }}
// //       className={`max-w-[60%] p-4 rounded-lg shadow-lg transition-all ${
// //         isNew
// //           ? "bg-green-200 border-l-4 border-green-500 scale-105" // Highlight for new message
// //           : "bg-white"
// //       }`}
// //     >
// //       <h3 className="text-md font-semibold text-gray-900">{name}</h3>
// //       <p className="text-sm text-gray-700">{message}</p>
// //       <p className="text-xs text-gray-500 mt-2">
// //         Updated at: {new Date(updatedAt).toLocaleString()}
// //       </p>
// //     </motion.div>
// //   );
// // };

// // export default MessageCard;

// import React from "react";
// import { motion } from "framer-motion";

// interface Message {
//   name: string;
//   message: string;
//   updatedAt: string;
//   isNew?: boolean;
//   isSender?: boolean; // True if the user sent this message
// }

// const MessageCard: React.FC<Message> = ({
//   name,
//   message,
//   updatedAt,
//   isNew,
//   isSender,
// }) => {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 30, scale: 0.95 }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         scale: isNew ? 1.05 : 1, // Slight "pop" effect for new messages
//       }}
//       exit={{ opacity: 0, y: -20, scale: 0.95 }}
//       transition={{
//         type: "spring",
//         stiffness: 180,
//         damping: 20,
//         mass: 0.7,
//       }}
//       className={`flex ${isSender ? "justify-end" : "justify-start"} w-full`}
//     >
//       <div
//         className={`relative max-w-[70%] p-3 text-white rounded-lg shadow-md ${
//           isSender ? "bg-blue-500 text-black" : "bg-gray-200 text-gray-900"
//         } ${isNew ? "scale-105 shadow-lg" : ""}`}
//       >
//         <p className="text-sm">{message}</p>
//         <p className="text-xs text-white/70 absolute bottom-1 right-2">
//           {new Date(updatedAt).toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export default MessageCard;

import React from "react";
import { motion } from "framer-motion";

interface Message {
  name: string;
  message: string;
  updatedAt: string;
  isNew?: boolean;
}

const MessageCard: React.FC<Message> = ({
  name,
  message,
  updatedAt,
  isNew,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.9 }} // Starts lower with slight shrink
      animate={{
        opacity: 1,
        y: 0,
        scale: isNew ? 1.05 : 1, // Slightly pop the new message
      }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }} // Smooth exit
      transition={{
        type: "spring",
        stiffness: 180, // Softer, more natural motion
        damping: 20, // Reduces excessive bouncing
        mass: 0.7, // Mimics real-world weight
      }}
      className={`max-w-[60%] p-4 rounded-lg shadow-lg transition-all ${
        isNew
          ? "bg-green-200 border-l-4 border-green-500 scale-105"
          : "bg-white"
      }`}
    >
      <h3 className="text-md font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700">{message}</p>
      <p className="text-xs text-gray-500 mt-2">
        Updated at: {new Date(updatedAt).toLocaleString()}
      </p>
    </motion.div>
  );
};

export default MessageCard;
