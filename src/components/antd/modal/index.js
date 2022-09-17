import { Button, Modal } from "antd";
import React from "react";

const ModalAntd = ({
  children,
  title,
  isModalOpen,
  setIsModalOpen,
  modalHandleCancel,
}) => {
  const showModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        style={{ marginRight: "8px", marginLeft: "8px", fontWeight: "bold", borderRadius: "6px" }}
        type="primary"
        onClick={showModal}
      >
        {title}
      </Button>
      <Modal
        title={<h3 style={{ margin: 0, fontWeight: "bold" }}>{title}</h3>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={modalHandleCancel}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalAntd;
