package com.devsuperior.dsvendas.service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository repository;

    public List<SellerDTO> findAll(){
        return repository.findAll().stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());
    }
}
